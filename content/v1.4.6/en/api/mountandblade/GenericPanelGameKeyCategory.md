---
title: "GenericPanelGameKeyCategory"
description: "GenericPanelGameKeyCategory: a public class in TaleWorlds.MountAndBlade, inheriting GameKeyContext; 16 exposed members (0 methods, 1 properties, 14 fields). Source: TaleWorlds.MountAndBlade/GenericPanelGameKeyCategory.cs."
---
# GenericPanelGameKeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class GenericPanelGameKeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/GenericPanelGameKeyCategory.cs`

## Overview

GenericPanelGameKeyCategory lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/GenericPanelGameKeyCategory.cs. It is a public class, implementing/inheriting GameKeyContext; the inheritance chain is GenericPanelGameKeyCategory → GameKeyContext. It exposes 16 public/protected members: 1 properties, 14 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericPanelGameKeyCategory is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain GenericPanelGameKeyCategory → GameKeyContext. The surface is property-led (properties 1/16, methods 0/16), so it mostly exposes state for reading. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/GenericPanelGameKeyCategory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GenericPanelGameKeyCategory Current` | property |
| `GenericPanelGameKeyCategory` | `public GenericPanelGameKeyCategory(string categoryId = " ") : base(categoryId, 116, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `Exit` | `public const string Exit` | field |
| `Confirm` | `public const string Confirm` | field |
| `ResetChanges` | `public const string ResetChanges` | field |
| `ToggleEscapeMenu` | `public const string ToggleEscapeMenu` | field |
| `SwitchToPreviousTab` | `public const string SwitchToPreviousTab` | field |
| `SwitchToNextTab` | `public const string SwitchToNextTab` | field |
| `GiveAll` | `public const string GiveAll` | field |
| `TakeAll` | `public const string TakeAll` | field |
| `Randomize` | `public const string Randomize` | field |
| `Start` | `public const string Start` | field |
| `Delete` | `public const string Delete` | field |
| `SelectProfile` | `public const string SelectProfile` | field |
| `Play` | `public const string Play` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
