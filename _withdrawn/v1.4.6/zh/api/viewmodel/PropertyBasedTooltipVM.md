---
title: "PropertyBasedTooltipVM"
description: "PropertyBasedTooltipVM：TaleWorlds.Core.ViewModelCollection.Information 的 public 类，继承 TooltipBaseVM；公开成员 18 个（方法 13、属性 3、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PropertyBasedTooltipVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class PropertyBasedTooltipVM : TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## 概述

PropertyBasedTooltipVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs。它是一个 public 类，实现/继承 TooltipBaseVM，继承链为 PropertyBasedTooltipVM → TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 18 个：13 方法、3 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PropertyBasedTooltipVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.Core.ViewModelCollection`），命名空间 `TaleWorlds.Core.ViewModelCollection.Information`，继承链 PropertyBasedTooltipVM → TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 13/18，属性 3/18），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PropertyBasedTooltipVM` | `public PropertyBasedTooltipVM(Type invokedType, object[]invokedArgs) : base(invokedType, invokedArgs)` | 构造函数 |
| `OnFinalizeInternal` | `protected override void OnFinalizeInternal()` | 方法 |
| `AddKeyType` | `public static void AddKeyType(string keyID, Func<string>getKeyText)` | 方法 |
| `GetKeyText` | `public string GetKeyText(string keyID)` | 方法 |
| `OnPeriodicRefresh` | `protected override void OnPeriodicRefresh()` | 方法 |
| `OnIsExtendedChanged` | `protected override void OnIsExtendedChanged()` | 方法 |
| `RefreshGenericPropertyBasedTooltip` | `public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip, object[]args)` | 方法 |
| `AddProperty` | `public void AddProperty(string definition, string value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | 方法 |
| `AddModifierProperty` | `public void AddModifierProperty(string definition, int modifierValue, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | 方法 |
| `AddProperty` | `public void AddProperty(string definition, Func<string>value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | 方法 |
| `AddProperty` | `public void AddProperty(Func<string>definition, Func<string>value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | 方法 |
| `AddColoredProperty` | `public void AddColoredProperty(string definition, string value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | 方法 |
| `AddColoredProperty` | `public void AddColoredProperty(string definition, Func<string>value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | 方法 |
| `AddColoredProperty` | `public void AddColoredProperty(Func<string>definition, Func<string>value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | 方法 |
| `MBBindingList` | `public MBBindingList<TooltipProperty>TooltipPropertyList` | 属性 |
| `Mode` | `public int Mode` | 属性 |
| `TooltipMode` | `public enum TooltipMode` | 属性 |
| `TooltipMode` | `public enum TooltipMode` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TooltipBaseVM](../../core-extra/TooltipBaseVM/)
- [同命名空间 BasicTooltipViewModel](../BasicTooltipViewModel/)
- [同命名空间 GameNotificationItemVM](../GameNotificationItemVM/)
- [同命名空间 GameNotificationVM](../GameNotificationVM/)
- [同命名空间 HintViewModel](../HintViewModel/)
