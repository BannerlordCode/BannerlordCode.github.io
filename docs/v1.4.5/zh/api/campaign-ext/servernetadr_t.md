<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `servernetadr_t`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# servernetadr_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct servernetadr_t`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/servernetadr_t.cs`

## 概述

`servernetadr_t` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Init
`public void Init(uint ip, ushort usQueryPort, ushort usConnectionPort)`

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### GetQueryPort
`public ushort GetQueryPort()`

**用途 / Purpose:** 获取 `query port` 的当前值。

### SetQueryPort
`public void SetQueryPort(ushort usPort)`

**用途 / Purpose:** 设置 `query port` 的值或状态。

### GetConnectionPort
`public ushort GetConnectionPort()`

**用途 / Purpose:** 获取 `connection port` 的当前值。

### SetConnectionPort
`public void SetConnectionPort(ushort usPort)`

**用途 / Purpose:** 设置 `connection port` 的值或状态。

### GetIP
`public uint GetIP()`

**用途 / Purpose:** 获取 `i p` 的当前值。

### SetIP
`public void SetIP(uint unIP)`

**用途 / Purpose:** 设置 `i p` 的值或状态。

### GetConnectionAddressString
`public string GetConnectionAddressString()`

**用途 / Purpose:** 获取 `connection address string` 的当前值。

### GetQueryAddressString
`public string GetQueryAddressString()`

**用途 / Purpose:** 获取 `query address string` 的当前值。

### ToString
`public static string ToString(uint unIP, ushort usPort)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### Equals
`public bool Equals(servernetadr_t other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### CompareTo
`public int CompareTo(servernetadr_t other)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

## 使用示例

```csharp
var value = new servernetadr_t();
value.Init(0, 0, 0);
```

## 参见

- [完整类目录](../catalog)