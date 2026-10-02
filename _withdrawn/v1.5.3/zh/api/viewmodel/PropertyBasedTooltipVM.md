---
title: "PropertyBasedTooltipVM"
description: "PropertyBasedTooltipVM 的自动生成类参考。"
---
# PropertyBasedTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core.ViewModelCollection
**Type:** `public class PropertyBasedTooltipVM : TooltipBaseVM `
**Base:** TooltipBaseVM
**Source:** TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs

## 概述

`PropertyBasedTooltipVM` 的自动生成类参考页面。声明来自 `TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnFinalizeInternal
`protected override void OnFinalizeInternal() `

### AddKeyType
`public static void AddKeyType(string keyID,Func<string> getKeyText) `

### GetKeyText
`public string GetKeyText(string keyID) `

### OnPeriodicRefresh
`protected override void OnPeriodicRefresh() `

### OnIsExtendedChanged
`protected override void OnIsExtendedChanged() `

### RefreshGenericPropertyBasedTooltip
`public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip,object[] args) `

### AddProperty
`public void AddProperty(string definition,string value,int textHeight = 0,TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None) `
`public void AddProperty(string definition,Func<string> value,int textHeight = 0,TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None) `
`public void AddProperty(Func<string> definition,Func<string> value,int textHeight = 0,TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None) `

### AddModifierProperty
`public void AddModifierProperty(string definition,int modifierValue,int textHeight = 0,TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None) `

### AddColoredProperty
`public void AddColoredProperty(string definition,string value,Color color,int textHeight = 0,TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None) `
`public void AddColoredProperty(string definition,Func<string> value,Color color,int textHeight = 0,TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None) `
`public void AddColoredProperty(Func<string> definition,Func<string> value,Color color,int textHeight = 0,TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
