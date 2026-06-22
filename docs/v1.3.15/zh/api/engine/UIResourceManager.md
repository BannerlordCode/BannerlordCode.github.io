<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UIResourceManager`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UIResourceManager

**命名空间:** TaleWorlds.Engine.GauntletUI
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`UIResourceManager` 是 `TaleWorlds.Engine.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ResourceDepot` | `public static ResourceDepot ResourceDepot { get; }` |
| `WidgetFactory` | `public static WidgetFactory WidgetFactory { get; }` |
| `SpriteData` | `public static SpriteData SpriteData { get; }` |
| `BrushFactory` | `public static BrushFactory BrushFactory { get; }` |
| `FontFactory` | `public static FontFactory FontFactory { get; }` |
| `ResourceContext` | `public static TwoDimensionEngineResourceContext ResourceContext { get; }` |


## 主要方法

### Refresh

```csharp
public static void Refresh()
```

### GetSpriteCategory

```csharp
public static SpriteCategory GetSpriteCategory(string spriteCategoryName)
```

### LoadSpriteCategory

```csharp
public static SpriteCategory LoadSpriteCategory(string spriteCategoryName)
```

### Update

```csharp
public static void Update()
```

### OnLanguageChange

```csharp
public static void OnLanguageChange(string newLanguageCode)
```

### Clear

```csharp
public static void Clear()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)