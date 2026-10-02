---
title: "ScoreboardHotKeyCategory"
description: "ScoreboardHotKeyCategory: a public class in TaleWorlds.MountAndBlade, inheriting GameKeyContext; 7 exposed members (0 methods, 0 properties, 6 fields). Source: TaleWorlds.MountAndBlade/ScoreboardHotKeyCategory.cs."
---
# ScoreboardHotKeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class ScoreboardHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/ScoreboardHotKeyCategory.cs`

## Overview

ScoreboardHotKeyCategory lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ScoreboardHotKeyCategory.cs. It is a public class (sealed), implementing/inheriting GameKeyContext; the inheritance chain is ScoreboardHotKeyCategory → GameKeyContext. It exposes 7 public/protected members: 6 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScoreboardHotKeyCategory is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ScoreboardHotKeyCategory → GameKeyContext. The surface is method-led (methods 0/7, properties 0/7), so it mostly exposes operations. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ScoreboardHotKeyCategory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScoreboardHotKeyCategory` | `public ScoreboardHotKeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `ShowMouse` | `public const int ShowMouse` | field |
| `HoldShow` | `public const string HoldShow` | field |
| `ToggleFastForward` | `public const string ToggleFastForward` | field |
| `TogglePause` | `public const string TogglePause` | field |
| `MenuShowContextMenu` | `public const string MenuShowContextMenu` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
