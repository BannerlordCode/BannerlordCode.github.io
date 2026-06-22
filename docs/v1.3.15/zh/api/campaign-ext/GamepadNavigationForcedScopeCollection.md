<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GamepadNavigationForcedScopeCollection`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadNavigationForcedScopeCollection

**命名空间:** TaleWorlds.GauntletUI.GamepadNavigation
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GamepadNavigationForcedScopeCollection` 是 `TaleWorlds.GauntletUI.GamepadNavigation` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `CollectionID` | `public string CollectionID { get; set; }` |
| `CollectionOrder` | `public int CollectionOrder { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; set; }` |
| `Scopes` | `public List<GamepadNavigationScope> Scopes { get; }` |
| `ActiveScope` | `public GamepadNavigationScope ActiveScope { get; set; }` |
| `PreviousScope` | `public GamepadNavigationScope PreviousScope { get; set; }` |


## 主要方法

### IsAvailable

```csharp
public bool IsAvailable()
```

### AddScope

```csharp
public void AddScope(GamepadNavigationScope scope)
```

### RemoveScope

```csharp
public void RemoveScope(GamepadNavigationScope scope)
```

### ClearScopes

```csharp
public void ClearScopes()
```

### ToString

```csharp
public override string ToString()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)