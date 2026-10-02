---
title: "SaveHandler"
description: "SaveHandler: a public class in TaleWorlds.CampaignSystem; 11 exposed members (6 methods, 4 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/SaveHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SaveHandler

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SaveHandler`
**File:** `TaleWorlds.CampaignSystem/SaveHandler.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

SaveHandler lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SaveHandler.cs. It is a public class; the inheritance chain is SaveHandler. It exposes 11 public/protected members: 6 methods, 4 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveHandler lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain SaveHandler. The surface is method-led (methods 6/11, properties 4/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SaveHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MainHeroVisualSupplier` | `public IMainHeroVisualSupplier MainHeroVisualSupplier` | property |
| `IsSaving` | `public bool IsSaving` | property |
| `IronmanModSaveName` | `public string IronmanModSaveName` | property |
| `AutoSaveInterval` | `public int AutoSaveInterval` | property |
| `QuickSaveCurrentGame` | `public void QuickSaveCurrentGame()` | method |
| `SaveAs` | `public void SaveAs(string saveName)` | method |
| `CampaignTick` | `public void CampaignTick()` | method |
| `SignalAutoSave` | `public void SignalAutoSave()` | method |
| `ForceAutoSave` | `public void ForceAutoSave()` | method |
| `GetSaveMetaData` | `public CampaignSaveMetaDataArgs GetSaveMetaData()` | method |
| `SaveMode` | `public enum SaveMode` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
