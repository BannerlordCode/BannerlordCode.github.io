---
title: "让 mod 被加载 — 从零到第一个模块入口"
description: "开发者视角总览：从建工程到 MBSubModuleBase 拿到 IGameStarter 的完整路径，含生命周期心智模型、六个版本签名差异，以及每一步该读哪一页。"
extra:
  sidebar: auto
---

# 让 mod 被加载 / 从零到第一个模块入口

> **这条路径解决什么**：你有一个想法，但不知道代码该从哪个类开始写、什么时候写。
> 全站只有一条入口是**每个 mod 都必须经过**的：`MBSubModuleBase`。
> 先把它跑通，后面 8 条任务路径才有挂载点。

## 心智模型：mod 不是插件，是「被游戏调用的一个类」

Bannerlord 没有「扫描 mod 目录、加载你的程序集」这套机制。
游戏的加载器只认一件事：**你的程序集里有没有一个 `MBSubModuleBase` 的子类，并且被它登记到模块清单里。**

所以「mod 被加载」实际上是三件事，缺一不可：

1. **程序集存在**并且被游戏找到 —— 这是构建产物与 `Module.xml` 的事，不是 C# 的事。
2. **游戏构造了你的 `MBSubModuleBase` 子类**（无参构造）。
3. **游戏在正确的时机回调你的重写方法** —— 你绝大多数逻辑写在这里，而不是构造函数里。

> **最容易踩的坑**：把初始化写在构造函数里。
> 构造函数执行时 `Game.Current` 通常还是 `null`，模块之间还没装配完。
> 要拿游戏对象，就等 `OnGameStart` / `OnCampaignBehaviorStarter` 这类回调。

## 下钻路径

| 步骤 | 做什么 | 打开 |
| --- | --- | --- |
| 1 | 搞清模块是怎么被发现和装载的 | [模块系统](../../v1.3.15/zh/architecture/module-system) · [模块地图](../../v1.5.3/zh/architecture/module-map) |
| 2 | 知道一个 mod 的文件该放哪、构建产物怎么出来 | [模组工作流](../../v1.3.15/zh/guide/mod-workflow) |
| 3 | 读入口基类的全部可重写点 | [MBSubModuleBase](../../v1.3.15/zh/api/core/MBSubModuleBase) |
| 4 | 知道 `Game` 这个根对象能给你什么 | [Game](../../v1.3.15/zh/api/core-extra/Game) |
| 5 | 知道 `IGameStarter` 是什么、什么时候能拿到 | [IGameStarter](../../v1.3.15/zh/api/core-extra/IGameStarter) |
| 6 | 把它转成具体的下一步任务 | [战役行为](../task-campaign-behavior) · [GameModel](../task-gamemodel) · [存档](../task-save) |

## 关键类型就这几个

- [MBSubModuleBase](../../v1.3.15/zh/api/core/MBSubModuleBase) —— **唯一必需的**。你的类继承它。
- [Module](../../v1.3.15/zh/api/core/Module) —— 描述模块本身（名字、依赖、加载顺序）。
- [IGameStarter](../../v1.3.15/zh/api/core-extra/IGameStarter) —— 游戏在启动阶段递给你的「注册器」句柄。
- [Game](../../v1.3.15/zh/api/core-extra/Game) —— 全局根对象。`Game.Current` 是访问器，不是构造参数。

## 你要注意什么

- **`OnGameStart` 的签名在 1.5.3 变过。** 1.5.3 是 `OnGameStart(Game, IGameStarter)`，
  旧文档里的 `(Game, IModularState)` 写法是过时的。跨版本写法见
  [从 1.4.5 迁移到 1.5.3](../../v1.5.3/zh/architecture/migration-from-1.4.5)。
- **`Game.Current` 可能在回调里仍为 `null`。** 尤其在菜单阶段和存档加载阶段。要判空，不要假设。
- **加载顺序由模块清单决定，不由代码顺序决定。** 你在 `OnGameStart` 里读别人的状态，
  很可能那个人还没初始化。依赖顺序写在模块清单里。
- **入口只有一个，但重写点有很多。** 「加载」「开始新游戏」「读档」「战役开始」是不同的回调，
  挂行为和换模型要挂在战役开始那个，不要全堆在最早的那个。

## 最小可运行形状

只给形状，签名以类型页为准 —— 每个参数的类型都能在
[MBSubModuleBase](../../v1.3.15/zh/api/core/MBSubModuleBase) 与
[IGameStarter](../../v1.3.15/zh/api/core-extra/IGameStarter) 上对上：

```csharp
public class MySubModule : MBSubModuleBase
{
    // 游戏准备好「注册器」的时候回调你。这是挂行为/换模型/加菜单项的正确时机。
    protected internal override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        base.OnGameStart(game, gameStarter);
        // 到这里才应该碰 Campaign.Current —— 更早的阶段战役世界还不存在。
    }
}
```

## 走完这条之后

| 你接下来要做 | 去 |
| --- | --- |
| 给战役挂一段常驻逻辑 | [加一个 CampaignBehavior](../task-campaign-behavior) |
| 替换游戏默认的算法 | [接一个 GameModel](../task-gamemodel) |
| 让自己的数据能存进档 | [读写存档](../task-save) |
| 在战斗场景里做事 | [处理一场战斗](../task-mission-action) |
| 加一个界面 | [挂一个 UI 面板](../task-ui-screen) |

## 导航

- ↑ [跨版本中枢 / 任务入口](../) —— 全部「我要做什么」与跨版本类对比
- ↑ [站点首页](../../)
- ↔ [模块系统](../../v1.3.15/zh/architecture/module-system) · [模组工作流](../../v1.3.15/zh/guide/mod-workflow)
