<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InstrumentData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InstrumentData

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class InstrumentData : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects/InstrumentData.cs`

## 概述

`InstrumentData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `InstrumentData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SittingAction` | `public string SittingAction { get; }` |
| `StandingAction` | `public string StandingAction { get; }` |
| `Tag` | `public string Tag { get; }` |
| `IsDataWithoutInstrument` | `public bool IsDataWithoutInstrument { get; }` |

## 主要方法

### InitializeInstrumentData
`public void InitializeInstrumentData(string sittingAction, string standingAction, bool isDataWithoutInstrument)`

**用途 / Purpose:** 初始化 `instrument data` 的状态、资源或绑定。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var value = new InstrumentData();
```

## 参见

- [完整类目录](../catalog)