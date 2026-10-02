---
title: "CraftingHotkeyCategory"
description: "CraftingHotkeyCategory: a public class in TaleWorlds.MountAndBlade, inheriting GameKeyContext; 12 exposed members (0 methods, 0 properties, 11 fields). Source: TaleWorlds.MountAndBlade/CraftingHotkeyCategory.cs."
---
# CraftingHotkeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class CraftingHotkeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/CraftingHotkeyCategory.cs`

## Overview

CraftingHotkeyCategory lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CraftingHotkeyCategory.cs. It is a public class (sealed), implementing/inheriting GameKeyContext; the inheritance chain is CraftingHotkeyCategory → GameKeyContext. It exposes 12 public/protected members: 11 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingHotkeyCategory is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CraftingHotkeyCategory → GameKeyContext. The surface is method-led (methods 0/12, properties 0/12), so it mostly exposes operations. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CraftingHotkeyCategory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingHotkeyCategory` | `public CraftingHotkeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `Zoom` | `public const string Zoom` | field |
| `Rotate` | `public const string Rotate` | field |
| `Ascend` | `public const string Ascend` | field |
| `ResetCamera` | `public const string ResetCamera` | field |
| `Copy` | `public const string Copy` | field |
| `Paste` | `public const string Paste` | field |
| `ControllerRotationAxisX` | `public const string ControllerRotationAxisX` | field |
| `ControllerRotationAxisY` | `public const string ControllerRotationAxisY` | field |
| `ControllerZoomIn` | `public const int ControllerZoomIn` | field |
| `ControllerZoomOut` | `public const int ControllerZoomOut` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
