---
title: "CheatsHotKeyCategory"
description: "CheatsHotKeyCategory: a public class in TaleWorlds.Engine, inheriting GameKeyContext; 25 exposed members (0 methods, 0 properties, 24 fields). Source: TaleWorlds.Engine/InputSystem/CheatsHotKeyCategory.cs."
---
# CheatsHotKeyCategory

**Namespace:** `TaleWorlds.Engine.InputSystem`
**Module:** `TaleWorlds.Engine`
**Type:** `public class CheatsHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.Engine/InputSystem/CheatsHotKeyCategory.cs`

## Overview

CheatsHotKeyCategory lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/InputSystem/CheatsHotKeyCategory.cs. It is a public class, implementing/inheriting GameKeyContext; the inheritance chain is CheatsHotKeyCategory → GameKeyContext. It exposes 25 public/protected members: 24 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheatsHotKeyCategory is a top-level type in TaleWorlds.Engine, namespace differing from (TaleWorlds.Engine.InputSystem) the module directory; inheritance chain CheatsHotKeyCategory → GameKeyContext. The surface is method-led (methods 0/25, properties 0/25), so it mostly exposes operations. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/InputSystem/CheatsHotKeyCategory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheatsHotKeyCategory` | `public CheatsHotKeyCategory() : base(" ", 0, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `MissionScreenHotkeyIncreaseCameraSpeed` | `public const string MissionScreenHotkeyIncreaseCameraSpeed` | field |
| `MissionScreenHotkeyDecreaseCameraSpeed` | `public const string MissionScreenHotkeyDecreaseCameraSpeed` | field |
| `ResetCameraSpeed` | `public const string ResetCameraSpeed` | field |
| `MissionScreenHotkeyIncreaseSlowMotionFactor` | `public const string MissionScreenHotkeyIncreaseSlowMotionFactor` | field |
| `MissionScreenHotkeyDecreaseSlowMotionFactor` | `public const string MissionScreenHotkeyDecreaseSlowMotionFactor` | field |
| `EnterSlowMotion` | `public const string EnterSlowMotion` | field |
| `Pause` | `public const string Pause` | field |
| `MissionScreenHotkeyHealYourSelf` | `public const string MissionScreenHotkeyHealYourSelf` | field |
| `MissionScreenHotkeyHealYourHorse` | `public const string MissionScreenHotkeyHealYourHorse` | field |
| `MissionScreenHotkeyKillEnemyAgent` | `public const string MissionScreenHotkeyKillEnemyAgent` | field |
| `MissionScreenHotkeyKillAllEnemyAgents` | `public const string MissionScreenHotkeyKillAllEnemyAgents` | field |
| `MissionScreenHotkeyKillEnemyHorse` | `public const string MissionScreenHotkeyKillEnemyHorse` | field |
| `MissionScreenHotkeyKillAllEnemyHorses` | `public const string MissionScreenHotkeyKillAllEnemyHorses` | field |
| `MissionScreenHotkeyKillFriendlyAgent` | `public const string MissionScreenHotkeyKillFriendlyAgent` | field |
| `MissionScreenHotkeyKillAllFriendlyAgents` | `public const string MissionScreenHotkeyKillAllFriendlyAgents` | field |
| `MissionScreenHotkeyKillFriendlyHorse` | `public const string MissionScreenHotkeyKillFriendlyHorse` | field |
| `MissionScreenHotkeyKillAllFriendlyHorses` | `public const string MissionScreenHotkeyKillAllFriendlyHorses` | field |
| `MissionScreenHotkeyKillYourSelf` | `public const string MissionScreenHotkeyKillYourSelf` | field |
| `MissionScreenHotkeyKillYourHorse` | `public const string MissionScreenHotkeyKillYourHorse` | field |
| `MissionScreenHotkeyGhostCam` | `public const string MissionScreenHotkeyGhostCam` | field |
| `MissionScreenHotkeySwitchAgentToAi` | `public const string MissionScreenHotkeySwitchAgentToAi` | field |
| `MissionScreenHotkeyControlFollowedAgent` | `public const string MissionScreenHotkeyControlFollowedAgent` | field |
| `MissionScreenHotkeyTeleportMainAgent` | `public const string MissionScreenHotkeyTeleportMainAgent` | field |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DebugHotKeyCategory](../DebugHotKeyCategory)
- [same namespace EngineInputManager](../EngineInputManager)
