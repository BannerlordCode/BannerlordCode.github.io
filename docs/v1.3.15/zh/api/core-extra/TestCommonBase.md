<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TestCommonBase`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TestCommonBase

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`TestCommonBase` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `BaseInstance` | `public static TestCommonBase BaseInstance { get; }` |


## 主要方法

### Tick

```csharp
public abstract void Tick()
```

### StartTimeoutTimer

```csharp
public void StartTimeoutTimer()
```

### ToggleTimeoutTimer

```csharp
public void ToggleTimeoutTimer()
```

### CheckTimeoutTimer

```csharp
public bool CheckTimeoutTimer()
```

### GetGameStatus

```csharp
public virtual string GetGameStatus()
```

### WaitFor

```csharp
public void WaitFor(double seconds)
```

### WaitUntil

```csharp
public virtual Task WaitUntil(Func<bool> func)
```

### WaitForAsync

```csharp
public Task WaitForAsync(double seconds, Random random)
```

### WaitForAsync

```csharp
public Task WaitForAsync(double seconds)
```

### GetAttachmentsFolderPath

```csharp
public static string GetAttachmentsFolderPath()
```

### OnFinalize

```csharp
public virtual void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)