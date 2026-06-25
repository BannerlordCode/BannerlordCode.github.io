---
title: "PsaiMusicEntity"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PsaiMusicEntity`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PsaiMusicEntity

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public abstract class PsaiMusicEntity : ICloneable`
**Base:** `ICloneable`
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.Editor/PsaiMusicEntity.cs`

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

**用途 / Purpose:** 获取 `class string` 的当前值。

### GetCompatibilitySetting
`public abstract CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**用途 / Purpose:** 获取 `compatibility setting` 的当前值。

### GetCompatibilityType
`public abstract CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**用途 / Purpose:** 获取 `compatibility type` 的当前值。

### GetParent
`public abstract PsaiMusicEntity GetParent()`

**用途 / Purpose:** 获取 `parent` 的当前值。

### GetChildren
`public abstract List<PsaiMusicEntity> GetChildren()`

**用途 / Purpose:** 获取 `children` 的当前值。

### GetIndexPositionWithinParentEntity
`public abstract int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**用途 / Purpose:** 获取 `index position within parent entity` 的当前值。

### Clone
`public virtual object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### ShallowCopy
`public virtual PsaiMusicEntity ShallowCopy()`

**用途 / Purpose:** 处理 `shallow copy` 相关逻辑。

### PropertyDifferencesAffectCompatibilities
`public virtual bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)`

**用途 / Purpose:** 处理 `property differences affect compatibilities` 相关逻辑。

### GetTheme
`public Theme GetTheme()`

**用途 / Purpose:** 获取 `theme` 的当前值。

## 使用示例

```csharp
var implementation = new CustomPsaiMusicEntity();
```

## 参见

- [完整类目录](../catalog)