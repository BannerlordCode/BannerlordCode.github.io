<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AccessObjectResult`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AccessObjectResult

**命名空间:** TaleWorlds.Diamond
**模块:** TaleWorlds.Diamond
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`AccessObjectResult` 是 `TaleWorlds.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `AccessObject` | `public AccessObject AccessObject { get; set; }` |
| `Success` | `public bool Success { get; set; }` |
| `FailReason` | `public TextObject FailReason { get; set; }` |


## 主要方法

### CreateSuccess

```csharp
public static AccessObjectResult CreateSuccess(AccessObject accessObject)
```

### CreateFailed

```csharp
public static AccessObjectResult CreateFailed(TextObject failReason)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)