$:.push File.expand_path("lib", __dir__)

# Maintain your gem's version:
require "fokem_appointment_systerm/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |spec|
  spec.name        = "fokem_appointment_systerm"
  spec.version     = FokemAppointmentSysterm::VERSION
  spec.authors     = ["bill1997603"]
  spec.email       = ["fan1997603@vip.qq.com"]
  spec.homepage    = "https://github.com/Byzanteam/fokem_appointment_systerm"
  spec.summary     = "Summary of FokemAppointmentSysterm."
  spec.description = "Description of FokemAppointmentSysterm."
  spec.license     = "MIT"

  spec.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  spec.add_dependency 'rails', '> 4.2'
  spec.add_dependency 'jquery-rails'

  spec.add_development_dependency 'pg'
end
