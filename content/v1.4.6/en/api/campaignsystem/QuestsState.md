---
title: "QuestsState"
description: "QuestsState: a public class in TaleWorlds.CampaignSystem, inheriting GameState; 9 exposed members (0 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/QuestsState.cs."
---
# QuestsState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class QuestsState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/QuestsState.cs`

## Overview

QuestsState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/QuestsState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is QuestsState → GameState. It exposes 9 public/protected members: 5 properties, 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestsState is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain QuestsState → GameState. The surface is property-led (properties 5/9, methods 0/9), so it mostly exposes state for reading. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/QuestsState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitialSelectedIssue` | `public IssueBase InitialSelectedIssue` | property |
| `InitialSelectedQuest` | `public QuestBase InitialSelectedQuest` | property |
| `InitialSelectedLog` | `public JournalLogEntry InitialSelectedLog` | property |
| `IsMenuState` | `public override bool IsMenuState` | property |
| `Handler` | `public IQuestsStateHandler Handler` | property |
| `QuestsState` | `public QuestsState()` | constructor |
| `QuestsState` | `public QuestsState(IssueBase initialSelectedIssue)` | constructor |
| `QuestsState` | `public QuestsState(QuestBase initialSelectedQuest)` | constructor |
| `QuestsState` | `public QuestsState(JournalLogEntry initialSelectedLog)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
