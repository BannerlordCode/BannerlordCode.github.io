---
title: "FastModeOptionsProvider"
description: "FastModeOptionsProvider: a public class in TaleWorlds.CampaignSystem.FastMode, inheriting ICampaignOptionProvider; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs."
---
# FastModeOptionsProvider

**Namespace:** `TaleWorlds.CampaignSystem.FastMode`
**Module:** `TaleWorlds.CampaignSystem.FastMode`
**Type:** `public class FastModeOptionsProvider : ICampaignOptionProvider`
**File:** `TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs`

## Overview

FastModeOptionsProvider lives in the TaleWorlds.CampaignSystem.FastMode module, source file TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs. It is a public class, implementing/inheriting ICampaignOptionProvider; the inheritance chain is FastModeOptionsProvider → ICampaignOptionProvider. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FastModeOptionsProvider is a top-level type in TaleWorlds.CampaignSystem.FastMode, namespace matching the module directory; inheritance chain FastModeOptionsProvider → ICampaignOptionProvider. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. ICampaignOptionProvider on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<ICampaignOptionData>GetGameplayCampaignOptions()` | method |
| `IEnumerable` | `public IEnumerable<ICampaignOptionData>GetCharacterCreationCampaignOptions()` | method |

## See Also

- [↑ campaignsystem-fastmode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FastModeSubModule](../FastModeSubModule)
