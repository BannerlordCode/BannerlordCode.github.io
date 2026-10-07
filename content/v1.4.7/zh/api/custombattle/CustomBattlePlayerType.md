---
title: "CustomBattlePlayerType"
description: "自定义战斗中标识玩家参战身份的枚举，区分指挥官与军士两种角色。"
---
# CustomBattlePlayerType

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `enum`
**基类：** `System.Enum`
**源文件：** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattlePlayerType.cs`（声明见第 6 行）

## 概述
`CustomBattlePlayerType` 是自定义战斗（Custom Battle）子系统中的一个枚举类型，用于标识玩家在自定义战斗中的参战身份。自定义战斗允许玩家在大地图上摆兵布阵后进行即时战斗，而玩家可以选择以「指挥官」（Commander）身份亲自上阵指挥，或以「军士」（Sergeant）身份作为阵型中的一名普通士兵参战。该枚举就是这一选择的类型化表达。

## 心智模型
把自定义战斗想象成一场沙盘推演：你在战前把双方部队摆好，开战后系统需要知道「玩家以什么身份入场」。`CustomBattlePlayerType` 就是玩家角色的标签——它不存储任何战斗数据，只回答一个问题：「玩家是挥旗的指挥官，还是列阵的军士？」枚举值本身即身份标识，战斗初始化逻辑会根据它决定玩家的出生位置、是否跟随阵型移动、以及镜头的初始跟随目标。

## 怎么用
### 怎么拿到
该枚举通常不直接实例化，而是作为参数出现在自定义战斗的初始化 API 中。当你在 mod 中启动或配置一场自定义战斗时，把枚举值传给负责设置玩家身份的接口即可。

### 典型用法
在自定义战斗的启动配置中，把玩家身份设为指挥官或军士：

```csharp
// 以指挥官身份开始自定义战斗
CustomBattlePlayerType playerType = CustomBattlePlayerType.Commander;
mission.SetPlayerType(playerType);

// 以军士身份参战（作为阵型中的普通一兵）
CustomBattlePlayerType sergeantType = CustomBattlePlayerType.Sergeant;
```

### 坑
- 枚举值是玩家身份的唯一依据：如果身份设置错误，玩家的出生位置、移动约束和镜头跟随目标都会错乱，且这类 bug 在编辑模式下不易察觉。
- 不要在战斗进行中随意更改身份，AI 指挥逻辑和阵型跟随关系可能已经缓存了旧的身份设定。

## 关键成员
| 成员 | 用途 |
|------|------|
| `Commander` | 标识玩家以指挥官身份参战，可亲自上阵并指挥部队。 |
| `Sergeant` | 标识玩家以军士身份参战，作为阵型中的一名普通士兵。 |

## 真实示例
```csharp
// 在自定义战斗中根据玩家选择设置参战身份
CustomBattlePlayerType selectedType = CustomBattlePlayerType.Commander;
if (preferFightAsSoldier)
{
    selectedType = CustomBattlePlayerType.Sergeant;
}
mission.SetPlayerType(selectedType);
```

## 参见
- [CustomBattleCompositionData](../CustomBattleCompositionData)
- [CustomBattleBannerEffects](../CustomBattleBannerEffects)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
