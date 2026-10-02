---
title: "TooltipProperty"
description: "TooltipProperty：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel、ISerializableObject；公开成员 22 个（方法 4、属性 8、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/Information/TooltipProperty.cs。"
---
# TooltipProperty

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class TooltipProperty : ViewModel, ISerializableObject`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/TooltipProperty.cs`

## 概述

TooltipProperty 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/Information/TooltipProperty.cs。它是一个 public 类，实现/继承 ViewModel、ISerializableObject，继承链为 TooltipProperty → ViewModel。public/protected 成员共 22 个：4 方法、8 属性、9 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TooltipProperty 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ViewModelCollection.Information），继承链 TooltipProperty → ViewModel。成员构成以属性为主（属性 8/22，方法 4/22），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/Information/TooltipProperty.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnlyShowWhenExtended` | `public bool OnlyShowWhenExtended` | 属性 |
| `OnlyShowWhenNotExtended` | `public bool OnlyShowWhenNotExtended` | 属性 |
| `TooltipProperty` | `public TooltipProperty()` | 构造函数 |
| `RefreshValue` | `public void RefreshValue()` | 方法 |
| `RefreshDefinition` | `public void RefreshDefinition()` | 方法 |
| `TooltipProperty` | `public TooltipProperty(string definition, string value, int textHeight, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `TooltipProperty` | `public TooltipProperty(string definition, Func<string>_valueFunc, int textHeight, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `TooltipProperty` | `public TooltipProperty(Func<string>_definitionFunc, Func<string>_valueFunc, int textHeight, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `TooltipProperty` | `public TooltipProperty(Func<string>_definitionFunc, Func<string>_valueFunc, object[]valueArgs, int textHeight, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `TooltipProperty` | `public TooltipProperty(string definition, string value, int textHeight, Color color, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `TooltipProperty` | `public TooltipProperty(string definition, Func<string>_valueFunc, int textHeight, Color color, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `TooltipProperty` | `public TooltipProperty(Func<string>_definitionFunc, Func<string>_valueFunc, int textHeight, Color color, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | 构造函数 |
| `TooltipProperty` | `public TooltipProperty(TooltipProperty property)` | 构造函数 |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | 方法 |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | 方法 |
| `TextHeight` | `public int TextHeight` | 属性 |
| `TextColor` | `public Color TextColor` | 属性 |
| `DefinitionLabel` | `public string DefinitionLabel` | 属性 |
| `ValueLabel` | `public string ValueLabel` | 属性 |
| `PropertyModifier` | `public int PropertyModifier` | 属性 |
| `TooltipPropertyFlags` | `public enum TooltipPropertyFlags` | 属性 |
| `TooltipPropertyFlags` | `public enum TooltipPropertyFlags` | 嵌套类型 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BasicTooltipViewModel](../BasicTooltipViewModel)
- [同命名空间 GameNotificationItemVM](../GameNotificationItemVM)
- [同命名空间 GameNotificationVM](../GameNotificationVM)
- [同命名空间 HintViewModel](../HintViewModel)
