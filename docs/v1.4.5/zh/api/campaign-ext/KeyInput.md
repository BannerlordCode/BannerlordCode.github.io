<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KeyInput`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KeyInput

**命名空间:** StoryMode.ViewModelCollection.Missions
**模块:** StoryMode.ViewModelCollection
**类型:** `public struct KeyInput`
**领域:** campaign-ext

## 概述

`KeyInput` 位于 `StoryMode.ViewModelCollection.Missions`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `StoryMode.ViewModelCollection.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Key` | `public InputKeyItemVM Key { get; set; }` |
| `ForcedKeyId` | `public string ForcedKeyId { get; set; }` |
| `ForcedKeyName` | `public string ForcedKeyName { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |
| `MouseClick` | `public int MouseClick { get; set; }` |
| `InputType` | `public int InputType { get; set; }` |

## 主要方法

### MouseAndClickInput
`public struct MouseAndClickInput(MovementTypes movementType, MouseClickTypes mouseClickType)`

**用途 / Purpose:** 处理 `mouse and click input` 相关逻辑。

### ControllerStickInput
`public struct ControllerStickInput(MovementTypes movementType, bool isLeftStick)`

**用途 / Purpose:** 处理 `controller stick input` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 KeyInput 实例，再调用它的公开方法
var value = new KeyInput();
value.MouseAndClickInput(movementType, mouseClickType);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
