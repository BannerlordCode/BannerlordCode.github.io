---
title: "WidgetAttributeKeyTypeDataSource"
description: "WidgetAttributeKeyTypeDataSource 的自动生成类参考。"
---
# WidgetAttributeKeyTypeDataSource

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeKeyTypeDataSource : WidgetAttributeKeyType`
**Base:** `WidgetAttributeKeyType`
**File:** `TaleWorlds.GauntletUI.Data/WidgetAttributeKeyTypeDataSource.cs`

## 概述

`WidgetAttributeKeyTypeDataSource` 位于 `TaleWorlds.GauntletUI.Data`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Data` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CheckKeyType
`public override bool CheckKeyType(string key)`

**用途 / Purpose:** 检查「key type」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeKeyTypeDataSource 实例
WidgetAttributeKeyTypeDataSource widgetAttributeKeyTypeDataSource = ...;
var result = widgetAttributeKeyTypeDataSource.CheckKeyType("example");
```

### GetKeyName
`public override string GetKeyName(string key)`

**用途 / Purpose:** 读取并返回当前对象中 「key name」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeKeyTypeDataSource 实例
WidgetAttributeKeyTypeDataSource widgetAttributeKeyTypeDataSource = ...;
var result = widgetAttributeKeyTypeDataSource.GetKeyName("example");
```

### GetSerializedKey
`public override string GetSerializedKey(string key)`

**用途 / Purpose:** 读取并返回当前对象中 「serialized key」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeKeyTypeDataSource 实例
WidgetAttributeKeyTypeDataSource widgetAttributeKeyTypeDataSource = ...;
var result = widgetAttributeKeyTypeDataSource.GetSerializedKey("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WidgetAttributeKeyTypeDataSource widgetAttributeKeyTypeDataSource = ...;
widgetAttributeKeyTypeDataSource.CheckKeyType("example");
```

## 参见

- [本区域目录](../)