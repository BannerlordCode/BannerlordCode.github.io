---
title: "接一个 GameModel / 替换游戏默认算法"
description: "开发者视角总览：Bannerlord 的模型装饰模式——GameModel 与 MBGameModel 的关系、模块初始化期 AddModel 的心智模型，以及为什么不存在运行期 setter。"
extra:
  sidebar: auto
---

# 接一个 GameModel / 替换游戏默认算法

> **这条路径解决什么**：游戏里某个算法（聚落繁荣度怎么算、部队 AI 怎么选目标、
> 英雄成长怎么给）写死在默认实现里。你要换掉它，或者给它插一层自己的逻辑。

## 心智模型：这是「模块初始化期的装饰器」，不是「运行期 setter」

Bannerlord 替换模型的方式**不是**这样：

```csharp
// ❌ 不存在这样的运行期入口。别写。
Game.Current.ReplaceModel(new MyModel());
```

真实机制是：

```text
战役初始化期
  CampaignGameStarter.AddModel(new MyDefaultXxxModel())
      ↓
  压入 MBGameModel<T> 装饰链
      ↓
运行期
  GameModels.GetModel<IXxx>()  →  沿装饰链查到你的实现
```

关键点：

- **注册发生在初始化期**，不是在你想换的那一刻。想中途换模型，这个 API 不给你。
- **`MBGameModel<T>` 是装饰器**。你的模型可以持有 `BaseModel` 并在调用前后加逻辑，
  也可以完全无视它自己算。
- **注册顺序决定谁在外面。** 后注册的在装饰链更外层，先查到你。

> **不要机械地字符串替换 `ReplaceModel`。** 这个名字在源码里不存在，
> 网上和旧 mod 教程里流传的写法基本都是错的。真实的三个入口是
> `CampaignGameStarter.GetModel<T>()` / `AddModel(GameModel)` / `AddModel<T>(MBGameModel<T>)`。

## 下钻路径

| 步骤 | 做什么 | 打开 |
| --- | --- | --- |
| 1 | 知道有哪些模型接口、当前拿到的是哪个 | [GameModels](../../v1.3.15/zh/api/campaign-ext/GameModels) |
| 2 | 读模型抽象基类 | [GameModel](../../v1.3.15/zh/api/core-extra/GameModel) |
| 3 | 读装饰器类型（这是你的基类） | [MBGameModel](../../v1.3.15/zh/api/core-extra/MBGameModel) |
| 4 | 知道查找与注册走的是谁 | [GameModelsManager](../../v1.3.15/zh/api/core-extra/GameModelsManager) |
| 5 | 看一个真实的默认实现长什么样（照着它写你的） | [DefaultSettlementProsperityModel](../../v1.3.15/zh/api/campaign-ext/DefaultSettlementProsperityModel) |
| 6 | 注册的地方 | [CampaignGameStarter](../../v1.3.15/zh/api/campaign-ext/CampaignGameStarter) |
| 7 | 换成别人的模型怎么写 | [模块系统](../../v1.3.15/zh/architecture/module-system) |

## 关键类型就这几个

- [GameModel](../../v1.3.15/zh/api/core-extra/GameModel) —— 模型标记/契约层。
- [MBGameModel](../../v1.3.15/zh/api/core-extra/MBGameModel) —— **装饰器基类**。要「包装默认实现再改一点」就继承它。
- [GameModels](../../v1.3.15/zh/api/campaign-ext/GameModels) —— 运行期的取用入口（`GetModel<T>` 一族）。
- [GameModelsManager](../../v1.3.15/zh/api/core-extra/GameModelsManager) —— 管理装饰链本身。
- [DefaultSettlementProsperityModel](../../v1.3.15/zh/api/campaign-ext/DefaultSettlementProsperityModel) —— 一个可直接对照的默认实现。

## 两种写法，先决定你要哪一种

| 你要做的 | 怎么写 | 代价 |
| --- | --- | --- |
| 完全替换算法 | 继承接口/基类，自己算，不碰 `BaseModel` | 游戏的默认平衡数值全丢，你要自己复现 |
| 在默认算法上加一层 | 继承 `MBGameModel<T>`，转发给 `BaseModel` 再改 | 升级时默认实现变了，你的转发可能对不上 |

**默认选第二种。** 只在默认实现明确算错、且你愿意长期维护一份替代算法时才选第一种。
跨版本升级时，第二种通常只改几个转发点，第一种要重做全部数值。

## 你要注意什么

- **注册时机在战役初始化。** 在 `OnGameStart` 之外的时机调用 `AddModel` 不生效。
- **后注册的在外面。** 如果两个 mod 都包装同一个模型，顺序取决于模块加载顺序，
  也就是模块清单里的依赖声明。这是双 mod 冲突最常见的来源。
- **装饰器里不要吞异常。** 装饰链上任何一层抛异常，最终表现是「某个模型返回了垃圾值」，
  排查起来毫无线索。转发前后各留一次可读的日志。
- **别在 `MBGameModel<T>` 的构造期调 `BaseModel`。** 装饰链那时还没接好。
- **取模型用 `GetModel<T>()`，不要缓存到字段。** 装饰链在初始化后才完整，
  早取会拿到还没装饰完的对象。

## 最小可运行形状

```csharp
// 写法二：在默认算法上加一层
public class MyProsperityModel : MBGameModel<DefaultSettlementProsperityModel>
{
    public override float GetProsperityValue(Settlement settlement)
        => base.GetProsperityValue(settlement) * 1.1f;   // 具体签名以类型页为准
}

// 注册（战役初始化期，一次）
starter.AddModel(new MyProsperityModel());
```

## 导航

- ↑ [跨版本中枢 / 任务入口](../)
- ↑ [站点首页](../../)
- ↔ [GameModel](../../v1.3.15/zh/api/core-extra/GameModel) · [MBGameModel](../../v1.3.15/zh/api/core-extra/MBGameModel)
