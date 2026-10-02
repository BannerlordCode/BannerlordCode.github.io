---
title: "ScoreboardSkillItemHoverToggleWidget"
description: "ScoreboardSkillItemHoverToggleWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard, inheriting HoverToggleWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScoreboardSkillItemHoverToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ScoreboardSkillItemHoverToggleWidget : HoverToggleWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ScoreboardSkillItemHoverToggleWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs. It is a public class, implementing/inheriting HoverToggleWidget; the inheritance chain is ScoreboardSkillItemHoverToggleWidget → HoverToggleWidget → Widget → PropertyOwnerObject. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScoreboardSkillItemHoverToggleWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard`, inheritance chain ScoreboardSkillItemHoverToggleWidget → HoverToggleWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Scoreboard/ScoreboardSkillItemHoverToggleWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SkillsShowWidget` | `public ScoreboardGainedSkillsListPanel SkillsShowWidget` | property |
| `GainedSkillsList` | `public ListPanel GainedSkillsList` | property |
| `ScoreboardSkillItemHoverToggleWidget` | `public ScoreboardSkillItemHoverToggleWidget(UIContext context) : base(context)` | constructor |
| `List` | `public List<Widget>GetAllSkillWidgets()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface HoverToggleWidget](../HoverToggleWidget/)
- [same namespace ScoreboardBattleResultTitleBackgroundWidget](../ScoreboardBattleResultTitleBackgroundWidget/)
- [same namespace ScoreboardBattleRewardsWidget](../ScoreboardBattleRewardsWidget/)
- [same namespace ScoreboardGainedSkillsListPanel](../ScoreboardGainedSkillsListPanel/)
- [same namespace ScoreboardScreenWidget](../ScoreboardScreenWidget/)
