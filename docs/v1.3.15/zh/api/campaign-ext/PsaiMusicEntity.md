<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PsaiMusicEntity`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PsaiMusicEntity

**命名空间:** psai.Editor
**模块:** psai.Editor
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PsaiMusicEntity` 是 `psai.Editor` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |


## 主要方法

### GetClassString

```csharp
public abstract string GetClassString()
```

### GetCompatibilitySetting

```csharp
public abstract CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)
```

### GetCompatibilityType

```csharp
public abstract CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)
```

### GetParent

```csharp
public abstract PsaiMusicEntity GetParent()
```

### GetChildren

```csharp
public abstract List<PsaiMusicEntity> GetChildren()
```

### GetIndexPositionWithinParentEntity

```csharp
public abstract int GetIndexPositionWithinParentEntity(PsaiProject parentProject)
```

### Clone

```csharp
public virtual object Clone()
```

### ShallowCopy

```csharp
public virtual PsaiMusicEntity ShallowCopy()
```

### PropertyDifferencesAffectCompatibilities

```csharp
public virtual bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)
```

### GetTheme

```csharp
public Theme GetTheme()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)