---
title: "PartyHotKeyCategory"
description: "PartyHotKeyCategory: a public class in TaleWorlds.MountAndBlade, inheriting GameKeyContext; 10 exposed members (0 methods, 0 properties, 9 fields). Source: TaleWorlds.MountAndBlade/PartyHotKeyCategory.cs."
---
# PartyHotKeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class PartyHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/PartyHotKeyCategory.cs`

## Overview

PartyHotKeyCategory lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/PartyHotKeyCategory.cs. It is a public class (sealed), implementing/inheriting GameKeyContext; the inheritance chain is PartyHotKeyCategory → GameKeyContext. It exposes 10 public/protected members: 9 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyHotKeyCategory is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain PartyHotKeyCategory → GameKeyContext. The surface is method-led (methods 0/10, properties 0/10), so it mostly exposes operations. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/PartyHotKeyCategory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyHotKeyCategory` | `public PartyHotKeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `TakeAllTroops` | `public const string TakeAllTroops` | field |
| `GiveAllTroops` | `public const string GiveAllTroops` | field |
| `TakeAllPrisoners` | `public const string TakeAllPrisoners` | field |
| `GiveAllPrisoners` | `public const string GiveAllPrisoners` | field |
| `PopupItemPrimaryAction` | `public const string PopupItemPrimaryAction` | field |
| `PopupItemSecondaryAction` | `public const string PopupItemSecondaryAction` | field |
| `OpenUpgradePopup` | `public const string OpenUpgradePopup` | field |
| `OpenRecruitPopup` | `public const string OpenRecruitPopup` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
