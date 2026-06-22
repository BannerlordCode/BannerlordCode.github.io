<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BladeData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BladeData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class BladeData : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/BladeData.cs`

## 概述

`BladeData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### Deserialize
```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode childNode)
```

## 使用示例

```csharp
// BladeData (Data) 的典型用法
new BladeData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)