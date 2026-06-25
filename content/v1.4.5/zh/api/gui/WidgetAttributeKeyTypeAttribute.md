---
title: "WidgetAttributeKeyTypeAttribute"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetAttributeKeyTypeAttribute`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetAttributeKeyTypeAttribute

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeKeyTypeAttribute : WidgetAttributeKeyType`
**Base:** `WidgetAttributeKeyType`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeKeyTypeAttribute.cs`

## 概述

`WidgetAttributeKeyTypeAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `WidgetAttributeKeyTypeAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CheckKeyType
`public override bool CheckKeyType(string key)`

**用途 / Purpose:** 处理 `check key type` 相关逻辑。

### GetKeyName
`public override string GetKeyName(string key)`

**用途 / Purpose:** 获取 `key name` 的当前值。

### GetSerializedKey
`public override string GetSerializedKey(string key)`

**用途 / Purpose:** 获取 `serialized key` 的当前值。

## 使用示例

```csharp
[WidgetAttributeKeyTypeAttribute]
public class Example { }
```

## 参见

- [完整类目录](../catalog)