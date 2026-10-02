---
title: "PropertyOwnerObject"
description: "PropertyOwnerObject：TaleWorlds.GauntletUI 的 public 类；公开成员 18 个（方法 9、属性 0、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/PropertyOwnerObject.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PropertyOwnerObject

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class PropertyOwnerObject`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/PropertyOwnerObject.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

PropertyOwnerObject 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/PropertyOwnerObject.cs。它是一个 public 类，继承链为 PropertyOwnerObject。public/protected 成员共 18 个：9 方法、9 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PropertyOwnerObject 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 PropertyOwnerObject。成员构成以方法为主（方法 9/18，属性 0/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/PropertyOwnerObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPropertyChanged` | `protected void OnPropertyChanged<T>(T value, [CallerMemberName]string propertyName = null) where T : class` | 方法 |
| `OnPropertyChanged` | `protected void OnPropertyChanged(int value, [CallerMemberName]string propertyName = null)` | 方法 |
| `OnPropertyChanged` | `protected void OnPropertyChanged(float value, [CallerMemberName]string propertyName = null)` | 方法 |
| `OnPropertyChanged` | `protected void OnPropertyChanged(bool value, [CallerMemberName]string propertyName = null)` | 方法 |
| `OnPropertyChanged` | `protected void OnPropertyChanged(Vec2 value, [CallerMemberName]string propertyName = null)` | 方法 |
| `OnPropertyChanged` | `protected void OnPropertyChanged(Vector2 value, [CallerMemberName]string propertyName = null)` | 方法 |
| `OnPropertyChanged` | `protected void OnPropertyChanged(double value, [CallerMemberName]string propertyName = null)` | 方法 |
| `OnPropertyChanged` | `protected void OnPropertyChanged(uint value, [CallerMemberName]string propertyName = null)` | 方法 |
| `OnPropertyChanged` | `protected void OnPropertyChanged(Color value, [CallerMemberName]string propertyName = null)` | 方法 |
| `object>PropertyChanged;` | `public event Action<PropertyOwnerObject, string, object>PropertyChanged;` | 事件 |
| `bool>boolPropertyChanged;` | `public event Action<PropertyOwnerObject, string, bool>boolPropertyChanged;` | 事件 |
| `int>intPropertyChanged;` | `public event Action<PropertyOwnerObject, string, int>intPropertyChanged;` | 事件 |
| `float>floatPropertyChanged;` | `public event Action<PropertyOwnerObject, string, float>floatPropertyChanged;` | 事件 |
| `Vec2>Vec2PropertyChanged;` | `public event Action<PropertyOwnerObject, string, Vec2>Vec2PropertyChanged;` | 事件 |
| `Vector2>Vector2PropertyChanged;` | `public event Action<PropertyOwnerObject, string, Vector2>Vector2PropertyChanged;` | 事件 |
| `double>doublePropertyChanged;` | `public event Action<PropertyOwnerObject, string, double>doublePropertyChanged;` | 事件 |
| `uint>uintPropertyChanged;` | `public event Action<PropertyOwnerObject, string, uint>uintPropertyChanged;` | 事件 |
| `Color>ColorPropertyChanged;` | `public event Action<PropertyOwnerObject, string, Color>ColorPropertyChanged;` | 事件 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)
