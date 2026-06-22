<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Logger`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Logger

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`Logger` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `LogOnlyErrors` | `public bool LogOnlyErrors { get; set; }` |


## 主要方法

### Print

```csharp
public void Print(string log, HTMLDebugCategory debugInfo = HTMLDebugCategory.General)
```

### Print

```csharp
public void Print(string log, HTMLDebugCategory debugInfo, bool printOnGlobal)
```

### FinishAndCloseAll

```csharp
public static void FinishAndCloseAll()
```

### GetFileStream

```csharp
public FileStream GetFileStream()
```

### GetErrorFileStream

```csharp
public FileStream GetErrorFileStream()
```

### CheckForFileSize

```csharp
public void CheckForFileSize()
```

### ShutDown

```csharp
public void ShutDown()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)