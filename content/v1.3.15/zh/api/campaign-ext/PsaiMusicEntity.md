---
title: "PsaiMusicEntity"
description: "PsaiMusicEntity 的自动生成类参考。"
---
# PsaiMusicEntity

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public abstract class PsaiMusicEntity : ICloneable`
**Base:** `ICloneable`
**File:** `TaleWorlds.PSAI/Editor/PsaiMusicEntity.cs`

## 概述

`PsaiMusicEntity` 位于 `psai.Editor`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `psai.Editor` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |

## 主要方法

### GetClassString
`public abstract string GetClassString()`

**用途 / Purpose:** 读取并返回当前对象中 「class string」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiMusicEntity 实例
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetClassString();
```

### GetCompatibilitySetting
`public abstract CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「compatibility setting」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiMusicEntity 实例
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetCompatibilitySetting(targetEntity);
```

### GetCompatibilityType
`public abstract CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**用途 / Purpose:** 读取并返回当前对象中 「compatibility type」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiMusicEntity 实例
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetCompatibilityType(targetEntity, reason);
```

### GetParent
`public abstract PsaiMusicEntity GetParent()`

**用途 / Purpose:** 读取并返回当前对象中 「parent」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiMusicEntity 实例
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetParent();
```

### GetChildren
`public abstract List<PsaiMusicEntity> GetChildren()`

**用途 / Purpose:** 读取并返回当前对象中 「children」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiMusicEntity 实例
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetChildren();
```

### GetIndexPositionWithinParentEntity
`public abstract int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**用途 / Purpose:** 读取并返回当前对象中 「index position within parent entity」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiMusicEntity 实例
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetIndexPositionWithinParentEntity(parentProject);
```

### Clone
`public virtual object Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 PsaiMusicEntity 实例
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.Clone();
```

### ShallowCopy
`public virtual PsaiMusicEntity ShallowCopy()`

**用途 / Purpose:** 处理与 「shallow copy」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiMusicEntity 实例
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.ShallowCopy();
```

### PropertyDifferencesAffectCompatibilities
`public virtual bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**用途 / Purpose:** 处理与 「property differences affect compatibilities」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 PsaiMusicEntity 实例
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.PropertyDifferencesAffectCompatibilities(otherEntity);
```

### GetTheme
`public Theme GetTheme()`

**用途 / Purpose:** 读取并返回当前对象中 「theme」 的结果。

```csharp
// 先通过子系统 API 拿到 PsaiMusicEntity 实例
PsaiMusicEntity psaiMusicEntity = ...;
var result = psaiMusicEntity.GetTheme();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PsaiMusicEntity instance = ...;
```

## 参见

- [本区域目录](../)