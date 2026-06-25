---
title: "WidgetAttributeValueTypeParameter"
description: "WidgetAttributeValueTypeParameter 的自动生成类参考。"
---
# WidgetAttributeValueTypeParameter

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeValueTypeParameter : WidgetAttributeValueType`
**Base:** `WidgetAttributeValueType`
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeValueTypeParameter.cs`

## 概述

`WidgetAttributeValueTypeParameter` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CheckValueType
`public override bool CheckValueType(string value)`

**用途 / Purpose:** **用途 / Purpose:** 检查value type在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeValueTypeParameter 实例
WidgetAttributeValueTypeParameter widgetAttributeValueTypeParameter = ...;
var result = widgetAttributeValueTypeParameter.CheckValueType("example");
```

### GetAttributeValue
`public override string GetAttributeValue(string value)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 attribute value 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeValueTypeParameter 实例
WidgetAttributeValueTypeParameter widgetAttributeValueTypeParameter = ...;
var result = widgetAttributeValueTypeParameter.GetAttributeValue("example");
```

### GetSerializedValue
`public override string GetSerializedValue(string value)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 serialized value 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeValueTypeParameter 实例
WidgetAttributeValueTypeParameter widgetAttributeValueTypeParameter = ...;
var result = widgetAttributeValueTypeParameter.GetSerializedValue("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WidgetAttributeValueTypeParameter widgetAttributeValueTypeParameter = ...;
widgetAttributeValueTypeParameter.CheckValueType("example");
```

## 参见

- [本区域目录](../)