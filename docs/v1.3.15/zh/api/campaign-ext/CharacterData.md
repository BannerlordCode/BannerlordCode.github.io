<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterData.cs`

## 概述

`CharacterData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### ExportCharacter
```csharp
public static void ExportCharacter(Hero hero, string path)
```

### ImportCharacter
```csharp
public static void ImportCharacter(Hero hero, string path)
```

## 使用示例

```csharp
// CharacterData (Data) 的典型用法
new CharacterData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)