---
title: "SoundProperties"
description: "SoundProperties: a public class in TaleWorlds.GauntletUI; 8 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/SoundProperties.cs."
---
# SoundProperties

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class SoundProperties`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/SoundProperties.cs`

## Overview

SoundProperties lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/SoundProperties.cs. It is a public class; the inheritance chain is SoundProperties. It exposes 8 public/protected members: 5 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SoundProperties is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain SoundProperties. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/SoundProperties.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AudioProperty>>RegisteredStateSounds` | `public IEnumerable<KeyValuePair<string, AudioProperty>>RegisteredStateSounds` | property |
| `AudioProperty>>RegisteredEventSounds` | `public IEnumerable<KeyValuePair<string, AudioProperty>>RegisteredEventSounds` | property |
| `SoundProperties` | `public SoundProperties()` | constructor |
| `AddStateSound` | `public void AddStateSound(string state, AudioProperty audioProperty)` | method |
| `AddEventSound` | `public void AddEventSound(string state, AudioProperty audioProperty)` | method |
| `FillFrom` | `public void FillFrom(SoundProperties soundProperties)` | method |
| `GetEventAudioProperty` | `public AudioProperty GetEventAudioProperty(string eventName)` | method |
| `GetStateAudioProperty` | `public AudioProperty GetStateAudioProperty(string stateName)` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
