---
title: "MBObjectBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBObjectBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBObjectBase

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBObjectBase`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectBase.cs`

## 概述

`MBObjectBase` 位于 `TaleWorlds.ObjectSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ObjectSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `Id` | `public MBGUID Id { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsReady` | `public bool IsReady { get; }` |

## 主要方法

### AfterInitialized
`public void AfterInitialized()`

**用途 / Purpose:** 处理 `after initialized` 相关逻辑。

### AfterRegister
`public virtual void AfterRegister()`

**用途 / Purpose:** 处理 `after register` 相关逻辑。

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Deserialize
`public virtual void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### GetName
`public virtual TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### PreAfterLoadInternal
`public void PreAfterLoadInternal()`

**用途 / Purpose:** 处理 `pre after load internal` 相关逻辑。

### AfterLoadInternal
`public void AfterLoadInternal()`

**用途 / Purpose:** 处理 `after load internal` 相关逻辑。

### OnRegistered
`public void OnRegistered()`

**用途 / Purpose:** 当 `registered` 事件触发时调用此方法。

### OnUnregistered
`public void OnUnregistered()`

**用途 / Purpose:** 当 `unregistered` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MBObjectBase();
value.AfterInitialized();
```

## 参见

- [完整类目录](../catalog)