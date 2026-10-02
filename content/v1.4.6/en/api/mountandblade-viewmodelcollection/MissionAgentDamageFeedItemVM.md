---
title: "MissionAgentDamageFeedItemVM"
description: "MissionAgentDamageFeedItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedItemVM.cs."
---
# MissionAgentDamageFeedItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentDamageFeedItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedItemVM.cs`

## Overview

MissionAgentDamageFeedItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionAgentDamageFeedItemVM → ViewModel. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentDamageFeedItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed) the module directory; inheritance chain MissionAgentDamageFeedItemVM → ViewModel. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/DamageFeed/MissionAgentDamageFeedItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentDamageFeedItemVM` | `public MissionAgentDamageFeedItemVM(string feedText, Action<MissionAgentDamageFeedItemVM>onRemove)` | constructor |
| `ExecuteRemove` | `public void ExecuteRemove()` | method |
| `FeedText` | `public string FeedText` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionAgentDamageFeedVM](../MissionAgentDamageFeedVM)
