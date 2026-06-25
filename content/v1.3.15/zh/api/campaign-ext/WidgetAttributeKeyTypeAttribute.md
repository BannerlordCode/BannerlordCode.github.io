---
title: "WidgetAttributeKeyTypeAttribute"
description: "WidgetAttributeKeyTypeAttribute 的自动生成类参考。"
---
# WidgetAttributeKeyTypeAttribute

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeKeyTypeAttribute : WidgetAttributeKeyType`
**Base:** `WidgetAttributeKeyType`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeKeyTypeAttribute.cs`

## 概述

`WidgetAttributeKeyTypeAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `WidgetAttributeKeyTypeAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CheckKeyType
`public override bool CheckKeyType(string key)`

**用途 / Purpose:** 检查key type在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeKeyTypeAttribute 实例
WidgetAttributeKeyTypeAttribute widgetAttributeKeyTypeAttribute = ...;
var result = widgetAttributeKeyTypeAttribute.CheckKeyType("example");
```

### GetKeyName
`public override string GetKeyName(string key)`

**用途 / Purpose:** 读取并返回当前对象中 key name 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeKeyTypeAttribute 实例
WidgetAttributeKeyTypeAttribute widgetAttributeKeyTypeAttribute = ...;
var result = widgetAttributeKeyTypeAttribute.GetKeyName("example");
```

### GetSerializedKey
`public override string GetSerializedKey(string key)`

**用途 / Purpose:** 读取并返回当前对象中 serialized key 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeKeyTypeAttribute 实例
WidgetAttributeKeyTypeAttribute widgetAttributeKeyTypeAttribute = ...;
var result = widgetAttributeKeyTypeAttribute.GetSerializedKey("example");
```

## 使用示例

```csharp
[WidgetAttributeKeyTypeAttribute]
public class Example { }
```

## 参见

- [本区域目录](../)