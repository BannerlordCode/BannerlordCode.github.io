<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HandlerResult`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HandlerResult

**命名空间:** TaleWorlds.Diamond
**模块:** TaleWorlds.Diamond
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`HandlerResult` 是 `TaleWorlds.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsSuccessful` | `public bool IsSuccessful { get; }` |
| `Error` | `public string Error { get; }` |
| `NextMessage` | `public Message NextMessage { get; }` |


## 主要方法

### CreateSuccessful

```csharp
public static HandlerResult CreateSuccessful()
```

### CreateSuccessful

```csharp
public static HandlerResult CreateSuccessful(Message nextMessage)
```

### CreateFailed

```csharp
public static HandlerResult CreateFailed(string error)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)