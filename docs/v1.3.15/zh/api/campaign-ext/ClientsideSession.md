<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClientsideSession`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClientsideSession

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class ClientsideSession : NetworkSession`
**Base:** `NetworkSession`
**File:** `TaleWorlds.Network/ClientsideSession.cs`

## 概述

`ClientsideSession` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Port` | `public int Port { get; set; }` |

## 主要方法

### Connect
`public virtual void Connect(string ip, int port, bool useSessionThread = true)`

**用途 / Purpose:** 处理 `connect` 相关逻辑。

### Process
`public void Process()`

**用途 / Purpose:** 处理 `process` 相关逻辑。

### Tick
`public override void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomClientsideSession();
```

## 参见

- [完整类目录](../catalog)