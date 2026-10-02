---
title: "StandaloneInputManager"
description: "StandaloneInputManager: a public class in TaleWorlds.TwoDimension.Standalone, inheriting IInputManager; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/StandaloneInputManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StandaloneInputManager

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class StandaloneInputManager : IInputManager`
**File:** `TaleWorlds.TwoDimension.Standalone/StandaloneInputManager.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

StandaloneInputManager lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/StandaloneInputManager.cs. It is a public class, implementing/inheriting IInputManager; the inheritance chain is StandaloneInputManager → IInputManager. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StandaloneInputManager lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone`, inheritance chain StandaloneInputManager → IInputManager. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/StandaloneInputManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StandaloneInputManager` | `public StandaloneInputManager(GraphicsForm graphicsForm)` | constructor |
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
- [same namespace FrameworkDomain](../FrameworkDomain/)
- [same namespace GraphicsContext](../GraphicsContext/)
- [same namespace GraphicsForm](../GraphicsForm/)
- [same namespace IMessageCommunicator](../IMessageCommunicator/)
