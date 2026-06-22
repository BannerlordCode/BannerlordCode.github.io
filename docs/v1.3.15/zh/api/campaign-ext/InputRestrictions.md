<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InputRestrictions`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputRestrictions

**命名空间:** TaleWorlds.ScreenSystem
**模块:** TaleWorlds.ScreenSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`InputRestrictions` 是 `TaleWorlds.ScreenSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Order` | `public int Order { get; }` |
| `Id` | `public Guid Id { get; }` |
| `MouseVisibility` | `public bool MouseVisibility { get; }` |
| `InputUsageMask` | `public InputUsageMask InputUsageMask { get; }` |


## 主要方法

### SetMouseVisibility

```csharp
public void SetMouseVisibility(bool isVisible)
```

### SetInputRestrictions

```csharp
public void SetInputRestrictions(bool isMouseVisible = true, InputUsageMask mask = InputUsageMask.All)
```

### ResetInputRestrictions

```csharp
public void ResetInputRestrictions()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)