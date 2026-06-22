<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InformationData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InformationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class InformationData`
**Base:** 无
**File:** `TaleWorlds.Core/InformationData.cs`

## 概述

`InformationData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public abstract TextObject TitleText { get; }` |
| `SoundEventPath` | `public abstract string SoundEventPath { get; }` |

## 主要方法

### IsValid
```csharp
public virtual bool IsValid()
```

## 使用示例

```csharp
// InformationData (Data) 的典型用法
new InformationData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)