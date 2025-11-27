"use client"

import { useState, useEffect, useRef } from "react"
import { VolumeIcon, PauseIcon, PlayIcon } from "./icons"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !audioRef.current) return

    // Auto-play on mount
    const playAudio = async () => {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.log("Autoplay prevented:", error)
        setIsPlaying(false)
      }
    }

    // Small delay to ensure audio element is ready
    const timer = setTimeout(playAudio, 500)
    return () => clearTimeout(timer)
  }, [isMounted])

  const togglePlayPause = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error("Playback error:", error)
    }
  }

  if (!isMounted) return null

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="/music.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        onClick={togglePlayPause}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:shadow-xl transition-all active:scale-95"
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <PauseIcon className="w-6 h-6" />
        ) : (
          <PlayIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  )
}
