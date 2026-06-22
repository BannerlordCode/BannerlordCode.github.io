<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameAxisKey`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameAxisKey

**命名空间:** TaleWorlds.InputSystem
**模块:** TaleWorlds.InputSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GameAxisKey` 是 `TaleWorlds.InputSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `AxisKey` | `public Key AxisKey { get; }` |
| `DefaultAxisKey` | `public Key DefaultAxisKey { get; }` |
| `PositiveKey` | `public GameKey PositiveKey { get; }` |
| `NegativeKey` | `public GameKey NegativeKey { get; }` |
| `Type` | `public GameAxisKey.AxisType Type { get; }` |


## 主要方法

### GetAxisState

```csharp
public float GetAxisState(bool isKeysAllowed, bool isMouseButtonAllowed, bool isMouseWheelAllowed, bool isControllerAllowed)
```

### ToString

```csharp
public override string ToString()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)