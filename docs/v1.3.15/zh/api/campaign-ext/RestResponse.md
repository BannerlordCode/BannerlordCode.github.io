<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RestResponse`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RestResponse

**命名空间:** TaleWorlds.Diamond.Rest
**模块:** TaleWorlds.Diamond
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`RestResponse` 是 `TaleWorlds.Diamond.Rest` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Successful` | `public bool Successful { get; }` |
| `SuccessfulReason` | `public string SuccessfulReason { get; }` |
| `FunctionResult` | `public RestFunctionResult FunctionResult { get; set; }` |
| `UserCertificate` | `public byte UserCertificate { get; set; }` |
| `RemainingMessageCount` | `public int RemainingMessageCount { get; }` |


## 主要方法

### SetSuccessful

```csharp
public void SetSuccessful(bool successful, string successfulReason)
```

### Create

```csharp
public static RestResponse Create(bool successful, string successfulReason)
```

### TryDequeueMessage

```csharp
public RestResponseMessage TryDequeueMessage()
```

### ClearMessageQueue

```csharp
public void ClearMessageQueue()
```

### EnqueueMessage

```csharp
public void EnqueueMessage(RestResponseMessage message)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)