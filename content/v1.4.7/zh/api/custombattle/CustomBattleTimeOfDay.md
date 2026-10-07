---
title: "CustomBattleTimeOfDay"
description: "CustomBattle 战斗时间枚举，定义一天中的不同时段用于战斗场景光照与氛围。"
---
# CustomBattleTimeOfDay

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `enum`
**基类：** `Enum`
**源文件：** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleTimeOfDay.cs`（声明见第 6 行）

## 概述
`CustomBattleTimeOfDay` 是 CustomBattle 模块中用于定义战斗发生时间的枚举类型。它表示一天中的不同时段（如清晨、正午、黄昏、夜晚等），用于控制战斗场景的光照、天空盒、环境音效等氛围相关的渲染与逻辑。通过指定不同的时间值，Mod 开发者可以为同一张地图创造出截然不同的战斗体验。

## 心智模型
将 `CustomBattleTimeOfDay` 理解为战斗场景的"时钟设置"。就像现实中选择在黎明还是正午进行战斗会直接影响视野和氛围一样，该枚举为 CustomBattle 的战斗初始化流程提供了一个时间维度。每个枚举值对应一组预定义的环境参数（光照角度、色温、阴影方向等），游戏引擎在加载战斗场景时会读取该值并应用对应的环境配置。Mod 开发者可以通过在战斗配置中设置该枚举值，精确控制战斗的视觉与氛围表现。

## 怎么用
### 怎么拿到
`CustomBattleTimeOfDay` 是一个枚举类型，无需实例化。在 CustomBattle 的配置流程中，通常通过战斗配置对象（如 `CustomBattle` 或相关的配置类）的属性来设置当前战斗的时间。Mod 开发者可以直接在代码中引用该枚举的任意值来指定战斗时间。

### 典型用法
在创建或配置一场 CustomBattle 时，Mod 开发者可以通过设置战斗配置中的时间属性来选择战斗发生的时段。例如，在自定义战斗的初始化代码中，将时间设置为 `CustomBattleTimeOfDay.Noon` 可以获得正午的明亮光照，而设置为 `CustomBattleTimeOfDay.Night` 则会触发夜晚的暗光与星空效果。该值会在战斗场景加载时被引擎读取，并影响全局光照、环境光遮蔽、天空盒渲染等视觉效果。

### 坑
- 该枚举仅影响视觉与氛围表现，不会改变战斗的物理规则或 AI 行为。如果需要时间相关的 gameplay 变化（如夜间视野降低），需要额外实现自定义逻辑。
- 枚举值的具体视觉效果取决于游戏引擎的内置配置，不同版本之间可能存在差异。Mod 开发者应在目标版本上验证实际效果。
- 该枚举通常作为战斗配置的一部分被序列化或保存，修改枚举值后应确保配置被正确持久化，否则可能在重新加载时恢复为默认值。

## 关键成员
| 成员 | 用途 |
|------|------|
| `CustomBattleTimeOfDay` | 枚举声明，定义战斗时间的所有可选值（CustomBattleTimeOfDay.cs:6） |

## 真实示例
```csharp
// 在 CustomBattle 配置中设置战斗时间为黄昏
var battleConfig = new CustomBattleConfig
{
    TimeOfDay = CustomBattleTimeOfDay.Dusk,
    MapName = "battlefield_01",
    PlayerCount = 100
};

// 根据时间值调整环境音效
if (battleConfig.TimeOfDay == CustomBattleTimeOfDay.Night)
{
    ApplyNightAmbience(battleConfig);
}
else if (battleConfig.TimeOfDay == CustomBattleTimeOfDay.Dawn)
{
    ApplyDawnAmbience(battleConfig);
}
```

## 参见
- [CustomBattleSiegeMachineVM](../CustomBattleSiegeMachineVM)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
