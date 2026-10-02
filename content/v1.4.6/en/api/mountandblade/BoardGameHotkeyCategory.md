---
title: "BoardGameHotkeyCategory"
description: "BoardGameHotkeyCategory: a public class in TaleWorlds.MountAndBlade, inheriting GameKeyContext; 6 exposed members (0 methods, 0 properties, 5 fields). Source: TaleWorlds.MountAndBlade/BoardGameHotkeyCategory.cs."
---
# BoardGameHotkeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class BoardGameHotkeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/BoardGameHotkeyCategory.cs`

## Overview

BoardGameHotkeyCategory lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BoardGameHotkeyCategory.cs. It is a public class (sealed), implementing/inheriting GameKeyContext; the inheritance chain is BoardGameHotkeyCategory → GameKeyContext. It exposes 6 public/protected members: 5 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameHotkeyCategory is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BoardGameHotkeyCategory → GameKeyContext. The surface is method-led (methods 0/6, properties 0/6), so it mostly exposes operations. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BoardGameHotkeyCategory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameHotkeyCategory` | `public BoardGameHotkeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `BoardGamePawnSelect` | `public const string BoardGamePawnSelect` | field |
| `BoardGamePawnDeselect` | `public const string BoardGamePawnDeselect` | field |
| `BoardGameDragPreview` | `public const string BoardGameDragPreview` | field |
| `BoardGameRollDice` | `public const string BoardGameRollDice` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
