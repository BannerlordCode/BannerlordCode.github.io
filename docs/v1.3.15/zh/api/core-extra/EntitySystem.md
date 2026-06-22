<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EntitySystem`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EntitySystem

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class EntitySystem<T>`
**Base:** 无
**File:** `TaleWorlds.Core/EntitySystem.cs`

## 概述

> TODO: 从开发者角度补充本类的职责与典型用例。

## 主要属性

| Name | Signature |
|------|-----------|
| `Components` | `public MBReadOnlyList<T> Components { get; }` |

## 主要方法

### AddComponent
```csharp
public T AddComponent(Type componentType)
```

### GetComponent
```csharp
public T GetComponent(Type componentType)
```

### GetComponents
```csharp
public MBList<T> GetComponents()
```

### Finalize
```csharp
public void Finalize(T component)
```

### RemoveComponent
```csharp
public void RemoveComponent(T component)
```

## 使用示例

```csharp
// TODO: 补充典型用例
```

## 参见

- [完整类目录](../catalog)