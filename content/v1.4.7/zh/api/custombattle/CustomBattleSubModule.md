---
title: "CustomBattleSubModule"
description: "自定义战斗的模块入口，继承 MBSubModuleBase，负责注册场景与初始化自定义战斗子系统。"
---
# CustomBattleSubModule

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `class`
**基类：** `MBSubModuleBase`
**源文件：** `bannerlord-1.4.7/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSubModule.cs`（声明见第 11 行）

## 概述
`CustomBattleSubModule` 是自定义战斗（Custom Battle）玩法的模块入口类。它继承自 `MBSubModuleBase`，是 Bannerlord 模块加载器识别并调用的根对象。游戏启动时，模块系统会实例化这个子模块，并通过它完成自定义战斗所需的场景注册、行为挂载与子系统初始化。对 mod 开发者而言，这是接入自定义战斗流程的起点：只要让自己的 mod 依赖并扩展这个子模块，就能在自定义战斗场景中注入自己的逻辑。

## 心智模型
把 `CustomBattleSubModule` 想象成自定义战斗的「总电源开关」。`MBSubModuleBase` 是 Bannerlord 所有 mod 子模块的基类，定义了模块生命周期（`OnSubModuleLoad`、`OnSubModuleUnloaded` 等）的钩子。`CustomBattleSubModule` 则把这些钩子具体化：它在加载时把自定义战斗的场景数据、战斗行为注册到引擎中，使游戏知道「自定义战斗」这套玩法存在。开发者不需要直接实例化它——模块加载器会自动完成——但理解它的生命周期钩子，就能在正确的时机注入代码。

## 怎么用
### 怎么拿到
`CustomBattleSubModule` 由 Bannerlord 的模块加载器在 mod 启动时自动创建，开发者通常不直接 `new` 它。若需要在 mod 中访问自定义战斗的注册信息，应通过 `MBSubModuleBase` 的生命周期方法或自定义战斗提供的静态入口间接获取，而不是手动构造。

### 典型用法
在自定义战斗 mod 中，开发者一般通过重写或扩展子模块的生命周期方法来挂载逻辑。例如，在 `OnSubModuleLoad` 中注册新的场景数据或行为：

```csharp
public class MyCustomBattleSubModule : CustomBattleSubModule
{
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        // 在此注册自定义场景或行为
    }
}
```

### 坑
- 不要绕过模块加载器手动实例化 `CustomBattleSubModule`，否则场景注册不会生效。
- 重写生命周期方法时务必调用 `base` 实现，否则会破坏自定义战斗的默认注册流程。
- 子模块的加载顺序由 mod 依赖关系决定，跨 mod 的初始化顺序问题需谨慎处理。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `OnSubModuleLoad` | 模块加载时调用，注册自定义战斗的场景与行为 |
| `OnSubModuleUnloaded` | 模块卸载时调用，释放自定义战斗相关资源 |
| `OnApplicationTick` | 每帧回调，可用于自定义战斗的逐帧逻辑 |

## 真实示例
```csharp
public class MyCustomBattleSubModule : CustomBattleSubModule
{
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        // 注册自定义场景数据
        var sceneData = new CustomBattleSceneData("my_scene", "My Scene",
            TerrainType.Plain, new List<TerrainType> { TerrainType.Plain },
            ForestDensity.Medium, false, false, false, "level_1");
        // 将场景数据注册到自定义战斗系统
    }
}
```

## 参见
- [CustomBattleSceneData](../CustomBattleSceneData)
- [CustomBattlePlayerSide](../CustomBattlePlayerSide)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
