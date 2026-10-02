---
title: "EngineInputManager"
description: "EngineInputManager: a public class in TaleWorlds.Engine.InputSystem, inheriting IInputManager; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/InputSystem/EngineInputManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EngineInputManager

**Namespace:** `TaleWorlds.Engine.InputSystem`
**Module:** `TaleWorlds.Engine`
**Type:** `public class EngineInputManager : IInputManager`
**File:** `TaleWorlds.Engine/InputSystem/EngineInputManager.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine.InputSystem)

## Overview

EngineInputManager lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/InputSystem/EngineInputManager.cs. It is a public class, implementing/inheriting IInputManager; the inheritance chain is EngineInputManager → IInputManager. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EngineInputManager lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine.InputSystem`), namespace `TaleWorlds.Engine.InputSystem`, inheritance chain EngineInputManager → IInputManager. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/InputSystem/EngineInputManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetRumbleEffect` | `public void SetRumbleEffect(float[]lowFrequencyLevels, float[]lowFrequencyDurations, int numLowFrequencyElements, float[]highFrequencyLevels, float[]highFrequencyDurations, int numHighFrequencyElements)` | method |
| `SetTriggerFeedback` | `public void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)` | method |
| `SetTriggerWeaponEffect` | `public void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)` | method |
| `SetTriggerVibration` | `public void SetTriggerVibration(float[]leftTriggerAmplitudes, float[]leftTriggerFrequencies, float[]leftTriggerDurations, int numLeftTriggerElements, float[]rightTriggerAmplitudes, float[]rightTriggerFrequencies, float[]rightTriggerDurations, int numRightTriggerElements)` | method |
| `SetLightbarColor` | `public void SetLightbarColor(float red, float green, float blue)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IInputManager](../../system/IInputManager/)
- [same namespace CheatsHotKeyCategory](../CheatsHotKeyCategory/)
- [same namespace DebugHotKeyCategory](../DebugHotKeyCategory/)
