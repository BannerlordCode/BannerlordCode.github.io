<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementMusicData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementMusicData

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class SettlementMusicData : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects/SettlementMusicData.cs`

## 概述

`SettlementMusicData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SettlementMusicData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MusicPath` | `public string MusicPath { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `LocationId` | `public string LocationId { get; }` |
| `Tempo` | `public int Tempo { get; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var value = new SettlementMusicData();
```

## 参见

- [完整类目录](../catalog)