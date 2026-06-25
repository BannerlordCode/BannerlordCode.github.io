---
title: "VoiceObject"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VoiceObject`
- [← 本领域 / 返回 localization](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VoiceObject

**命名空间:** TaleWorlds.Localization
**模块:** TaleWorlds.Localization
**类型:** `public class VoiceObject`
**领域:** localization

## 概述

`VoiceObject` 位于 `TaleWorlds.Localization`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Localization` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `VoicePaths` | `public MBReadOnlyList<string> VoicePaths { get; }` |

## 主要方法

### AddVoicePaths
`public void AddVoicePaths(XmlNode node, string modulePath)`

**用途 / Purpose:** 向当前集合/状态中添加 `voice paths`。

### Deserialize
`public static VoiceObject Deserialize(XmlNode node, string modulePath)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 VoiceObject 实例，再调用它的公开方法
var value = new VoiceObject();
value.AddVoicePaths(node, "example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-localization)
