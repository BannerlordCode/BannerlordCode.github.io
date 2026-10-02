---
title: "CraftingVM"
description: "CraftingVM 的自动生成类参考。"
---
# CraftingVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection
**Type:** `public class CraftingVM : ViewModel `
**Base:** ViewModel
**Source:** TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs

## 概述

`CraftingVM` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RefreshValues
`public override void RefreshValues() `

### OnFinalize
`public override void OnFinalize() `

### OnCraftingLogicRefreshed
`public void OnCraftingLogicRefreshed(Crafting newCraftingLogic) `

### UpdateCraftingHero
`public void UpdateCraftingHero(CraftingAvailableHeroItemVM newHero) `

### ExecuteConfirm
`public ValueTuple<bool,bool> ExecuteConfirm() `

### ExecuteCancel
`public void ExecuteCancel() `

### ExecuteMainAction
`public void ExecuteMainAction() `

### ExecuteResetCamera
`public void ExecuteResetCamera() `

### SetConfirmInputKey
`public void SetConfirmInputKey(HotKey hotKey) `

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey) `

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey) `

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey) `

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey) `
`public void AddCameraControlInputKey(GameKey gameKey) `
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey) `

### ExecuteSwitchToCrafting
`public void ExecuteSwitchToCrafting() `

### ExecuteSwitchToSmelting
`public void ExecuteSwitchToSmelting() `

### ExecuteSwitchToRefinement
`public void ExecuteSwitchToRefinement() `

### SetCurrentDesignManually
`public void SetCurrentDesignManually(CraftingTemplate craftingTemplate,ValueTuple<CraftingPiece,int>[] pieces) `

### OnItemRefreshedDelegate
`public delegate void OnItemRefreshedDelegate(bool isItemVisible)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
