---
title: "GameMenuOverlay"
description: "GameMenuOverlay：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay 的 public 类，继承 ViewModel；公开成员 20 个（方法 11、属性 7、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuOverlay

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuOverlay : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

GameMenuOverlay 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 GameMenuOverlay → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 20 个：11 方法、7 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuOverlay 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`，继承链 GameMenuOverlay → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 11/20，属性 7/20），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuOverlay` | `public GameMenuOverlay()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteOnSetAsActiveContextMenuItem` | `protected virtual void ExecuteOnSetAsActiveContextMenuItem(GameMenuPartyItemVM troop)` | 方法 |
| `ExecuteOnOverlayClosed` | `public virtual void ExecuteOnOverlayClosed()` | 方法 |
| `ExecuteOnOverlayOpened` | `public virtual void ExecuteOnOverlayOpened()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteTroopAction` | `protected void ExecuteTroopAction(object o)` | 方法 |
| `Refresh` | `public virtual void Refresh()` | 方法 |
| `UpdateOverlayType` | `public virtual void UpdateOverlayType(GameMenu.MenuOverlayType newType)` | 方法 |
| `OnFrameTick` | `public virtual void OnFrameTick(float dt)` | 方法 |
| `HourlyTick` | `public void HourlyTick()` | 方法 |
| `IsContextMenuEnabled` | `public bool IsContextMenuEnabled` | 属性 |
| `IsInitializationOver` | `public bool IsInitializationOver` | 属性 |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended` | 属性 |
| `MBBindingList` | `public MBBindingList<StringItemWithEnabledAndHintVM>ContextList` | 属性 |
| `CurrentOverlayType` | `public int CurrentOverlayType` | 属性 |
| `SetExitInputKey` | `public void SetExitInputKey(HotKey hotKey)` | 方法 |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey` | 属性 |
| `MenuOverlayContextList` | `protected internal enum MenuOverlayContextList` | 属性 |
| `MenuOverlayContextList` | `protected internal enum MenuOverlayContextList` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ArmyMenuOverlayVM](../ArmyMenuOverlayVM/)
- [同命名空间 EncounterMenuOverlayVM](../EncounterMenuOverlayVM/)
- [同命名空间 GameMenuOverlayActionVM](../GameMenuOverlayActionVM/)
- [同命名空间 GameMenuOverlayFactory](../GameMenuOverlayFactory/)
