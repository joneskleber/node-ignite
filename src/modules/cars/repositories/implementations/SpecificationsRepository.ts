import { Specification } from "../../model/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  // function para verificar a especificação
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }

  // Method to create a specification
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }

  // Method to list specifications
  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
